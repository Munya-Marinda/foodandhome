import React from "react";

const CategoryDateText_2 = ({
  showCategory,
  dateText,
  textColor,
  categoryText,
}) => {
  //
  //
  //
  //
  //
  return (
    <div className="category_date_category_parent_1">
      {categoryText === undefined ? (
        <></>
      ) : (
        <>
          <span
            className="category_date_span_category_1"
            style={{ color: textColor !== "" ? textColor : "initial" }}
          >
            <b>{categoryText !== undefined && categoryText.toUpperCase()}</b>
          </span>
        </>
      )}
      <span
        className="category_date_span_date_1"
        style={{ color: textColor !== "" ? textColor : "initial" }}
      >
        {dateText}
      </span>
    </div>
  );
};

export default CategoryDateText_2;
