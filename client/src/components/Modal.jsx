const Modal = () => {
  const mode = "create";

  const handleChange = () => {
    console.log("Something changed!");
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {mode} your task</h3>
          <button>X</button>
        </div>

        <form>
          <input
            required
            maxLength={30}
            placeholder="Your task goes here"
            name="title"
            value={""}
            onChange={handleChange}
          />
          <br />
          <input
            required
            type="range"
            min="0"
            max="100"
            name="progress"
            value={""}
            onChange={handleChange}
          />
          <input className={mode} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
