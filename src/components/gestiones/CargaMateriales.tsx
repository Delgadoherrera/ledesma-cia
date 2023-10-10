import * as React from "react";
1;
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, InputLabel, MenuItem, Select } from "@mui/material";
import { ButtonBase } from "@mui/material";
import { IonBreadcrumb, IonHeader, IonItem } from "@ionic/react";
import { ProductServices } from "../../Services/ProductService";

export default function CargaMateriales() {
  const [values, setValues] = React.useState({
    codigo: "",
    articulo: "",
    descripcion: "",
    largo: "",
    ancho: "",
    alto: "",
    litros: 0,
    unidadMedida: "",
    kilogramos: 0,
    cantidad: 0,
  });
  const productService = new ProductServices();

  React.useEffect(() => {
    console.log("values", values);
  }, [values]);

  const handleSend = (data: any) => {
    productService.AgregarProducto(data);
  };

  return (
    <>
      <b> Carga de materiales</b>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        className="CargaMaterialesContainer"
      >
        <TextField
          id="outlined-basic"
          label="Articulo"
          variant="outlined"
          onChange={(e) => setValues({ ...values, articulo: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Codigo"
          variant="outlined"
          onChange={(e) => setValues({ ...values, codigo: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Descripción"
          variant="outlined"
          onChange={(e) =>
            setValues({ ...values, descripcion: e.target.value })
          }
        />
        {/*      <TextField
        id="outlined-basic"
        label="Largo"
        variant="outlined"
        onChange={(e) => setValues({ ...values, largo: e.target.value })}
      />
      <TextField
        id="outlined-basic"
        label="Ancho"
        variant="outlined"
        onChange={(e) => setValues({ ...values, ancho: e.target.value })}
      /> */}

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values.unidadMedida}
          label="Age"
          onChange={(e) =>
            setValues({ ...values, unidadMedida: e.target.value })
          }
        >
          <MenuItem value={"Lts"}>Litros</MenuItem>
          <MenuItem value={"Kg"}>Kg</MenuItem>
          <MenuItem value={"Cm"}>Cm</MenuItem>
          <MenuItem value={"Mts"}>Mts</MenuItem>
        </Select>

        {values.unidadMedida === "Mts" && (
          <>
            <TextField
              id="outlined-basic"
              label="Largo"
              variant="outlined"
              onChange={(e) => setValues({ ...values, largo: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Ancho"
              variant="outlined"
              onChange={(e) => setValues({ ...values, ancho: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Alto"
              variant="outlined"
              onChange={(e) => setValues({ ...values, alto: e.target.value })}
            />
          </>
        )}

        {values.unidadMedida === "Cm" && (
          <>
            <TextField
              id="outlined-basic"
              label="Largo"
              variant="outlined"
              onChange={(e) => setValues({ ...values, largo: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Ancho"
              variant="outlined"
              onChange={(e) => setValues({ ...values, ancho: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Alto"
              variant="outlined"
              onChange={(e) => setValues({ ...values, alto: e.target.value })}
            />
          </>
        )}

        {values.unidadMedida === "Lts" && (
          <>
            <TextField
              id="outlined-basic"
              label="Cantidad de litros"
              variant="outlined"
              onChange={(e) =>
                setValues({ ...values, litros: parseFloat(e.target.value) })
              }
            />
          </>
        )}

        {values.unidadMedida === "Kg" && (
          <>
            <TextField
              id="outlined-basic"
              label="Cantidad de kilogramos"
              variant="outlined"
              onChange={(e) =>
                setValues({ ...values, kilogramos: parseFloat(e.target.value) })
              }
            />
          </>
        )}
        <TextField
          id="outlined-basic"
          label="Unidades"
          variant="outlined"
          onChange={(e) =>
            setValues({ ...values, cantidad: parseInt(e.target.value) })
          }
        />
        <Button variant="outlined" onClick={() => handleSend(values)}>
          Enviar
        </Button>
        <Button variant="outlined">Cancelar</Button>
      </Box>
    </>
  );
}
