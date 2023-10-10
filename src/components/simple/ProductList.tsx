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
            <TableCell>Descripcion</TableCell>

            <TableCell align="right">id</TableCell>
            <TableCell align="right">medida</TableCell>
            <TableCell align="right">Unidad medida</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(products) &&
            products.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.descripcion}
                </TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.medida}</TableCell>
                <TableCell align="right">{row.unidadMedida}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
