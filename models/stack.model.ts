import { Skill } from "./skill.model";

export interface Stack {
  id: string;
  learning: boolean;
  end: string;
  skill: Partial<Skill>;
}

export interface AllStacksData {
  data: {
    allStacks: Stack[];
  };
}
