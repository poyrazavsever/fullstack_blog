import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCategory } from '@/features/category/thunk/createCategory';
import toast from 'react-hot-toast';

const CreateCategory = () => {
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const categoryData = {
      name: categoryName,
    };

    try {
      await dispatch(createCategory(categoryData)).unwrap(); // Thunk'ı çağır
      toast.success('Category created successfully!'); // Başarılı bildirim
      setCategoryName(''); // Formu temizle
    } catch (error) {
      console.error(error);
      toast.error('Failed to create category.'); // Hata bildirimi
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Category Name */}
        <div>
          <label className="block text-lg font-medium dark:text-neutral-300">Category Name</label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-full p-2 mt-2 bg-white dark:bg-neutral-700 dark:text-white border border-gray-300 rounded"
            placeholder="Enter category name"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition-all"
          >
            Create Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
