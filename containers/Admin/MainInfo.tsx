import Input from '@/components/Input';
import Textarea from '@/components/Input/Textarea';
import Button from '@/components/Button';
import { SyntheticEvent, useState, FC, useEffect } from 'react';
import { getMe, updateMe } from '@/fireb/db/me';
import { IHeaderData } from '@/containers/Header';

const MainInfoContainer: FC = () => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<IHeaderData>({
    title: '',
    description: '',
  });

  useEffect(() => {
    getMe().then((data) => setState(data as IHeaderData));
  }, []);

  const handleChange =
    (name: string) =>
    ({ target }: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = target as HTMLInputElement | HTMLTextAreaElement;
      setState({
        ...state,
        [name]: value,
      });
    };

  const handleSave = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    await updateMe(state);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <form onSubmit={handleSave}>
      <div>
        <h1 className="pb-4 text-xl">Title</h1>
        <Input
          onChange={handleChange('title')}
          value={state.title}
          className="w-full"
        />
      </div>
      <div className="pt-12">
        <h1 className="pb-4 text-xl">Description</h1>
        <Textarea
          onChange={handleChange('description')}
          value={state.description}
          className="w-full"
          rows={8}
        />
      </div>
      <Button loading={loading} type="submit" className="mt-12" primary>
        Save
      </Button>
    </form>
  );
};

export default MainInfoContainer;
