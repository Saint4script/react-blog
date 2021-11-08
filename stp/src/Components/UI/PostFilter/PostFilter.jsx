import MyInput from '../Input/MyInput';
import MySelect from '../Select/mySelect';

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
                <MyInput
                    placeholder="Поиск..."
                    value={filter.query}
                    onChange={e => setFilter({...filter, query: e.target.value})}
                />
                <MySelect 
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    options={[
                        {value: "title", name: "Заголовок"},
                    ]} 
                    defaultOption="Сортировка"
                />
            </div>
  );
}

export default PostFilter;