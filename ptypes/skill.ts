export default interface SkillItemType {
  id: string;
  name: string;
  list: string;
  type: string;
  exp: number;
  index: number;
}

export type OmitIdSkillItemType = Omit<SkillItemType, 'id'>;
