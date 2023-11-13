import type { Skill } from "./skill.model";

export interface Stack {
  id: string;
  learning: string;
  end: string;
  skill: Skill;
}

export interface AllStacksData {
  data: {
    allStacks: Stack[];
  };
}
