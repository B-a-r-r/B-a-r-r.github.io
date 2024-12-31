import { ReactNode, useEffect, useState } from 'react'
import styles from '../style'
import { Skill } from '../data/types'
import { skills } from '../data'
import { randomNumberBetween } from '../utils'

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

  const [skillsNodes, setSkillsNodes] = useState(getSkillsNodes)

  useEffect(() => {
    setSkillsNodes(getSkillsNodes)
  }, [selectedTab])

  return (
    <section id='skills'
      className=
      {`
        ${styles.sizeScreen}
        ${styles.section}
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
          className=
          {`
            p-4
            border-2
          `}
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
          className=
          {`
            p-4
            border-2
          `}
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
          className=
          {`
            p-4
            border-2
          `}
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
      
      <div id="skills-icons-pool"
        className=
        {`
          ${styles.sizeFull}
          border-2
          relative
          bg-transparent
        `}
      >
        
        {skillsNodes}

      </div>

    </section>
  )
}

export default Skills
