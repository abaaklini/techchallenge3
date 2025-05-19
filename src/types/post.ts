export interface IPostProps {
  titulo: string;
  conteudo: string;
  autor: string;
  _id: string;
}

export type PostFormData = Omit<IPostProps, '_id'>;

export type PostFormProps = {
  isEditMode: boolean;
  formData: PostFormData;
  success: boolean;
  onChange: (key: keyof PostFormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
};
