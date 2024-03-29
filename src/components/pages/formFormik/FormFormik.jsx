import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export const FormFormik = ({ procesandoOrden }) => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      telefono: "",
      email: "",
    },

    onSubmit: (data) => {
        procesandoOrden(data);
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Campo requerido")
        .min(5, "Debe tener al menos 5 caracteres"),
      telefono: Yup.number()
        .required("Campo requerido")
        .min(10, "Debe tener al menos 10 digitos"),
      email: Yup.string()
        .email("Debes ingresar un email valido")
        .required("Campo requerido"),
    }),
    validateOnChange: false,
  });

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "20px",
          padding: "20px",
        }}
      >
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />

        <TextField
          label="Teléfono"
          variant="outlined"
          name="telefono"
          onChange={handleChange}
          error={errors.telefono ? true : false}
          helperText={errors.telefono}
        />

        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <Box
          sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <Button type="submit" variant="contained" sx={{ width: 200 }}>
            Enviar
          </Button>
        </Box>
      </form>
    </>
  );
};
