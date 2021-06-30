const NewPost = (props) => {
  console.log(props.match.params.id);
  const id = props.match.params.id;
  return (
    <form action={`/post/new/${id}`} method="POST" className="m-3">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          placeholder="name"
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-4">
        Save
      </button>
    </form>
  );
};

export default NewPost;
