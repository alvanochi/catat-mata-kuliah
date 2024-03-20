import FormAddMeet from "../Fragments/Form/FormAddMeet";
import DataLayout from "../Layout/DataLayout";

export default function AddMeet({ onClick }) {
  return (
    <DataLayout onClick={onClick} type="add" title="Tambah Pertemuan">
      <FormAddMeet />
    </DataLayout>
  );
}
