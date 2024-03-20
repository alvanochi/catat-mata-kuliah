import FormAddMatkul from "../Fragments/Form/FormAddMatkul";
import DataLayout from "../Layout/DataLayout";

export default function AddMatkul({ onClick }) {
  return (
    <DataLayout onClick={onClick} type="add" title="Tambah Mata Kuliah">
      <FormAddMatkul />
    </DataLayout>
  );
}
