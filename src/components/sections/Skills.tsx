import { useEffect, useState } from "react"
import { skills } from "../../data/contents"
import { SkillCategorie, SkillSubcategorie } from "../../data/dataTypes"
import styles from "../../style"
import { ForceGraph3D } from "react-force-graph"
import {TextureLoader, SRGBColorSpace, SpriteMaterial, Sprite} from "three"

type GraphData = {
  nodes: {id: string, name: string, img: string, val: number, group: SkillSubcategorie}[];
  links: {source: string, target: string}[];
}

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(SkillCategorie.LANGUAGE)
  const [graphData, setGraphData] = useState<GraphData>()
  
  useEffect(() => {
    const initGraphData: GraphData = {nodes: [], links: []}

    skills.filter((skill) => skill.category === selectedCategory)
    .sort((a) => a.framework ? -1 : 1)
    .sort((a,b) => a.framework === b.framework ? -1 : 1)
    .map((skill, index, all) => {
      if (index === 0) { console.log(all) }
      initGraphData.nodes.push({
        id: skill.label,
        name: skill.label,
        img: skill.icon,
        val: skill.weight ?? 1,
        group: skill.subcategory ?? SkillSubcategorie.TEXT
      })

      const verifiedTarget = (
        skill.framework ? all.find((s) => s.label === skill.framework)
          : all.find((s) => 
            s.subcategory === skill.subcategory 
            && !s.framework
            && s.label !== skill.label
          ) ?? null
      )
      if (verifiedTarget !== null) {
        initGraphData.links.push({
          source: skill.label,
          target: verifiedTarget!.label
        })
      }
    })

    setGraphData(initGraphData)
  }, [selectedCategory])

  return (
    <section id="skills"
      className=
      {`
        ${styles.sizeFull}
        ${styles.flexCol}
        ${styles.contentCenter}
      `}
    >
      <div id="section-controls"
        className=
        {`
          ${styles.flexRow}
          w-full
          h-fit        
        `}
      >
        {Object.values(SkillCategorie).map((categorie) => (
          <button key={`${categorie}`}
            className=
            {`
              ${selectedCategory === categorie ? "text-[--color-tertiary]" : ""}
              hover:text-[--color-tertiary]
            `}
            onClick={() => setSelectedCategory(categorie)}
          > {categorie} </button>
          
        ))}
        {selectedCategory}
      </div>

      <div id="graph-container"
        className=
        {`
          ${styles.sizeFull}
          ${styles.flexCol}
          ${styles.contentCenter}
        `}
      >
        <ForceGraph3D graphData={graphData}
          backgroundColor={
            getComputedStyle(document.documentElement)
            .getPropertyValue("--color-primary")
          }
          width={document.querySelector("#graph-container")?.clientWidth ?? 0}
          height={ document.querySelector("#graph-container")?.clientHeight ?? 0}
          showNavInfo={false}

          nodeThreeObject={({ img }) => {
              const imgTexture = new TextureLoader().load(img);
              imgTexture.colorSpace = SRGBColorSpace;
              const material = new SpriteMaterial({ map: imgTexture });
              const sprite = new Sprite(material);
              sprite.scale.set(24, 24, 1);
              return sprite;
          }}
          nodeLabel={(node) => `${node.name}`}
          nodeVal={(node) => node.val}
          nodeRelSize={5}
          nodeResolution={10}


          linkColor={() =>
            getComputedStyle(document.documentElement)
            .getPropertyValue("--color-tertiary")
          }
          linkVisibility={true}
          linkLabel={"bonjour"}
          linkWidth={0.2}
          linkOpacity={0.5}
          linkResolution={8}
          linkCurvature={0.25}
          linkCurveRotation={0.5}

          linkDirectionalParticles={1}
          linkDirectionalParticleSpeed={0.001}
          linkDirectionalParticleWidth={0.8}
          
        />
      </div>
    </section>
  )  
}

export default Skills
