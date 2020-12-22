import React, { useState, useEffect } from "react";
import DataService from "../../services/service";

const CategoryDropDown = ({ getValue }) => {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    async function getCategory() {
      const categoryResponse = await DataService.findAllCategories();

      setCategory(
        categoryResponse.data.map((data) => ({
          categoryName: data.category_name,
          categoryId: data.category_id,
        }))
      );
    }
    getCategory();
  }, []);

  const onChangeHandler = (e) => {
    const categoryValue = parseInt(e.target.value);
    getValue(categoryValue);
  };

  return (
    <div>
      <select className="form-control" onChange={onChangeHandler} required>
        <option defaultChecked>--Select Category--</option>
        {categories.map(({ categoryId, categoryName }) => (
          <option key={categoryId} value={categoryId}>
            {categoryName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropDown;
