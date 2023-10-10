import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ProductServices } from "../../Services/ProductService";
import { Product } from "../../interfaces/index";

export default function BasicTable() {
  const [products, setProducts] = React.useState<Product[]>([]); // Especifica el tipo Product[]
  const productService = new ProductServices();

  console.log("products", products);
  React.useEffect(() => {
    productService.ListarProductos().then((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <b> Stock disponible</b>
          <TableRow>
            <TableCell>articulo</TableCell>
            <TableCell align="right">Descripcion</TableCell>
            <TableCell align="right">Codigo</TableCell>
            <TableCell align="right">Largo</TableCell>
            <TableCell align="right">Ancho</TableCell>
            <TableCell align="right">Alto</TableCell>
            <TableCell align="right">Peso</TableCell>
            <TableCell align="right">Litros</TableCell>
            <TableCell align="right">Unidad medida</TableCell>
            <TableCell align="right">Cantidad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(products) &&
            products.map((row) => (
              <TableRow
                key={row.articulo}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.articulo}
                </TableCell>
                <TableCell align="right">{row.descripcion}</TableCell>
                <TableCell align="right">{row.codigo}</TableCell>
                <TableCell align="right">{row.largo}</TableCell>
                <TableCell align="right">{row.ancho}</TableCell>
                <TableCell align="right">{row.alto}</TableCell>
                <TableCell align="right">{row.kilogramos}</TableCell>
                <TableCell align="right">{row.litros}</TableCell>
                <TableCell align="right">{row.unidadMedida}</TableCell>
                <TableCell align="right">{row.cantidad}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
