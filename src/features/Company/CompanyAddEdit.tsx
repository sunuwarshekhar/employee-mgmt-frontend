import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { gql, useMutation } from "@apollo/client";

// Zod schema for validation
const companySchema = z.object({
  name: z.string().min(1, "Name is required"),
  zipCode: z.string().min(1, "Zip code is required"),
  address: z.string().min(1, "Address is required"),
});

type CompanyFormValues = z.infer<typeof companySchema>;

type CompanyAddEditProps = {
  mode: "add" | "edit";
  initialData?: CompanyFormValues & { id?: string };
  onCompleted?: () => void;
};

// Placeholder GraphQL mutations
const CREATE_COMPANY = gql`
  mutation CreateCompany($input: CreateCompanyInput!) {
    createCompany(input: $input) {
      id
      name
      zipCode
      address
    }
  }
`;

const UPDATE_COMPANY = gql`
  mutation UpdateCompany($id: ID!, $input: UpdateCompanyInput!) {
    updateCompany(id: $id, input: $input) {
      id
      name
      zipCode
      address
    }
  }
`;

const CompanyAddEdit: React.FC<CompanyAddEditProps> = ({
  mode,
  initialData,
  onCompleted,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CompanyFormValues>({
    resolver: zodResolver(companySchema),
    defaultValues: initialData || { name: "", zipCode: "", address: "" },
  });

  const [createCompany] = useMutation(CREATE_COMPANY);
  const [updateCompany] = useMutation(UPDATE_COMPANY);

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const onSubmit = async (data: CompanyFormValues) => {
    try {
      if (mode === "add") {
        await createCompany({ variables: { input: data } });
      } else if (mode === "edit" && initialData?.id) {
        await updateCompany({ variables: { id: initialData.id, input: data } });
      }
      if (onCompleted) onCompleted();
    } catch (error) {
      // Handle error (show toast, etc.)
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register("name")} />
        {errors.name && (
          <span style={{ color: "red" }}>{errors.name.message}</span>
        )}
      </div>
      <div>
        <label>Zip Code</label>
        <input {...register("zipCode")} />
        {errors.zipCode && (
          <span style={{ color: "red" }}>{errors.zipCode.message}</span>
        )}
      </div>
      <div>
        <label>Address</label>
        <input {...register("address")} />
        {errors.address && (
          <span style={{ color: "red" }}>{errors.address.message}</span>
        )}
      </div>
      <button type="submit" disabled={isSubmitting}>
        {mode === "add" ? "Add Company" : "Update Company"}
      </button>
    </form>
  );
};

export default CompanyAddEdit;




