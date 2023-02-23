const Title = ({ textA, textB }) => {
  return (
    <div className="section-title">
      <h2>
        {textA} <span>{textB}</span>
      </h2>
    </div>
  );
};
export default Title;
