import cn from '@/helpers/classNames';
import Input from '@/components/Input';
import Button from '@/components/Button';
import SkillItemType, { OmitIdSkillItemType } from '@/ptypes/skill';
import { updateSkill } from '@/fireb/db/skills';
import { ChangeEvent, useState } from 'react';

interface AdminSkillComponentType {
  skill: SkillItemType;
  reload: () => void;
}

const AdminSkillComponent = ({
  skill: { id, ...skill },
  reload,
}: AdminSkillComponentType) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<OmitIdSkillItemType>({ ...skill });

  const handleSave = async () => {
    setLoading(true);
    await updateSkill({ id, ...data });
    setTimeout(() => {
      setLoading(false);
      reload();
    }, 500);
  };

  const handleChange =
    (name: string) =>
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      const value = name === 'index' ? Number(target.value) : target.value;
      setData({ ...data, [name]: value });
    };

  console.log('data', data);

  return (
    <div
      className={cn([
        'grid gap-6 sm:grid-cols-[repeat(auto-fill,100px)]',
        'bg-[rgba(80,80,87,40%)] rounded p-7 flex-wrap',
        'sm:justify-around',
        'items-end',
      ])}
      key={id}
    >
      <div className="w-full md:w-auto">
        <label className="block pb-2">Index</label>
        <Input
          onChange={handleChange('index')}
          className="w-full"
          value={data.index}
        />
      </div>
      <div className="w-full md:w-auto">
        <label className="block pb-2">Name</label>
        <Input
          onChange={handleChange('name')}
          value={data.name}
          className="w-full"
        />
      </div>
      <div className="w-full md:w-auto">
        <label className="block pb-2">List</label>
        <Input
          onChange={handleChange('list')}
          className="w-full"
          value={data.list}
        />
      </div>
      <div className="w-full md:w-auto">
        <label className="block pb-2">Type</label>
        <Input
          onChange={handleChange('type')}
          className="w-full"
          value={data.type}
        />
      </div>
      <div className="w-full md:w-auto">
        <label className="block pb-2">Exp</label>
        <Input
          onChange={handleChange('exp')}
          className="w-full"
          value={data.exp}
        />
      </div>
      <Button
        loading={loading}
        onClick={handleSave}
        className="py-2 text-[16px] leading-6"
        primary
      >
        Save
      </Button>
    </div>
  );
};

export default AdminSkillComponent;
