import { useParams } from "react-router";
import { PostForm } from "./PostForm";
import { usePostForm } from "./usePostForm";

const FormularioPosts = () => {
  const { id } = useParams<{ id: string }>();
  const { formData, success, handleChange, handleSubmit } = usePostForm(id);

  return (
    <PostForm
      isEditMode={!!id}
      formData={formData}
      success={success}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default FormularioPosts;
