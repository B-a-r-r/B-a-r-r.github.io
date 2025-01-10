import { ReactNode, useEffect, useState } from 'react'
import styles from '../../style'
import { Skill } from '../../data/dataTypes'
import { skills } from '../../data/contents'
import { randomNumberBetween } from '../../utils'

const Skills = () => {
  const [selectedTab, setSelectedTab] = useState<string>('lang')

  const getSkillsNodes = () => {
    const skillsNodes: Array<ReactNode> = [];

    skills.filter((icon: Skill) => icon.category === selectedTab)
    .map((icon: Skill) => (
      skillsNodes.push(
        <span key={`icon-span-${icon.id}`}
          id={`icon-span-${icon.id}`}
          className=
          {`
            ${styles.flexCol}
            ${styles.contentCenter}
            z-[1]
            absolute
          `}
          style={{
            top: `${randomNumberBetween(0,100)}%`,
            left: `${randomNumberBetween(0,100)}%`,
            animation: `skill-icon-motion ${randomNumberBetween(10,20)}s infinite linear`
          }}
        >
          <label id={`icon-label-${icon.id}`}
            className=
            {`
              hidden hover:flex
              ${styles.sizeFull}
              border-2
            `}
          > {icon.label} </label>
          
          <img key={`icon-${icon.id}`}
            id={`icon-${icon.id}`}
            src={icon.icon} 
            alt={icon.label} 
            className=
            {`
              w-20
              h-20
            `}
          />
        </span>
      )
    ))
    return skillsNodes
  }


  const drawSkillsTree = () => {
    const canvas = document.getElementById('skills-icons-pool') as HTMLCanvasElement
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    
    const startPoint: number = (() => {
      const tabFrom: HTMLElement | null = document.getElementById(selectedTab+'-button')
      if (tabFrom) {
        return tabFrom.offsetLeft + tabFrom.offsetWidth / 2
      }
      return canvas.width / 2
    })();

    const subTrees: Array<Array<Skill>> = (
      getSkillsSubcategories(selectedTab).map((cat: string) => (
        skills.filter((skill: Skill) => skill.category === selectedTab && skill.subcategory === cat)
      ))
    )

    
  }

  async function drawSkillsSubtree(
      subtree: Array<Skill>, 
      startPoint: number, 
      ctx: CanvasRenderingContext2D,
      maxX: number,
      maxY: number,
  ) {
    return
  }

  const [skillsNodes, setSkillsNodes] = useState(getSkillsNodes)

  useEffect(() => {
    setSkillsNodes(getSkillsNodes)
    drawSkillsTree()
  }, [selectedTab])

  return (
    <section id='skills'
      className=
      {`
        ${styles.sizeFull}
        ${styles.section}
        mt-0
        ${styles.flexCol}
        ${styles.contentCenter}
      `}
    >
      <div id="controls-container"
        className=
        {`
          w-full
          h-[10%]
          ${styles.flexRow}
          ${styles.contentStartY}
          space-x-10
        `}
      >

        <button id="lang-button"
          className={``}
          onClick={() => setSelectedTab('lang')}
        > Languages 
          <hr id='lib-hr'
            className=
            {`
              ${styles.line}
            `}
          />
        </button>

        <button id="tools-button"
          className={``}
          onClick={() => setSelectedTab('tools')}
        > Tools 
          <hr id='lib-hr'
            className=
            {`
              ${styles.line}
            `}
          />
        </button>

        <button id="lib-button"
          className={``}
          onClick={() => setSelectedTab('lib')}
        > Libraries 
          <hr id='lib-hr'
            className=
            {`
              ${styles.line}
            `}
          />
        </button>

      </div>
      
      <canvas id="skills-icons-pool"
        className=
        {`
          ${styles.sizeFull}
          border-2
          relative
          bg-transparent
        `}
      />
    </section>
  )
}

export default Skills
