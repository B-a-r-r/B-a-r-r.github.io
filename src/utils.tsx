import { useState } from "react";
import { skills } from "./data/contents";
import { Skill } from "./data/types";

export const randomNumberBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getSkillsCategories = () => {
    const categories: Array<string> = []
    skills.map((skill: Skill) => {
        if (!categories.includes(skill.category)) {
            categories.push(skill.category)
        }
    })
    return categories
}

export const getSkillsSubcategories = (category: string) => {
    const subcategories: Array<string> = []
    skills.map((skill: Skill) => {
        if (skill.category === category && skill.subcategory && !subcategories.includes(skill.subcategory)) {
            subcategories.push(skill.subcategory)
        }
    })
    return subcategories
}
