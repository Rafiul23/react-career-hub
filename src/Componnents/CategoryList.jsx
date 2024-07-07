import { useEffect, useState } from "react";

const CategoryList = () => {
  const [categories, SetCategores] = useState([]);

  useEffect(() => {
    fetch("data/categories.json")
      .then((res) => res.json())
      .then((data) => SetCategores(data));
  }, []);

  return (
    <div className="my-10">
      <h1 className="md:text-5xl text-2xl text-center">Job Category List</h1>
      <p className="text-center py-3">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
      {
        categories.map(category =><div className="p-4 bg-base-200 rounded-sm" key={category.id}>
            <img src={category.logo} className="my-3" alt="logo" />
            <h5 className="font-bold">{category.category_name}</h5>
            <p>{category.availability}</p>
        </div>)
      }
      </div>
    </div>
  );
};

export default CategoryList;
