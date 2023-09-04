import React from 'react'

const Categories = ({ allCategories }) => {
   return (
    <div className='btn-container'>
        {allCategories.map((category, index) => {
            return (
                <button className='filter-btn' key={index}>
                    {category}
                </button>
            );
        })}
    </div>
   );
};

export default Categories