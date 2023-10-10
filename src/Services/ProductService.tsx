import axios, { AxiosResponse } from "axios";

export class ProductServices {
  async AgregarProducto(data: any): Promise<any> {
    try {
      const response: AxiosResponse<any> = await axios.post(
        `https://ledesma.missingpets.art/materiales/nuevoMaterial`,
        data,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Content-Type": "application/json",
          },
        }
      );
      console.log("res", response);
      return response.data;
    } catch (error) {
      console.error("Error searching for pet:", error);
      return null;
    }
  }
  async ListarProductos(): Promise<any> {
    try {
      const response: AxiosResponse<any> = await axios.get(
        `https://ledesma.missingpets.art/materiales/listarTodos`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      console.error("Error getting nearby pets:", error);
      return null;
    }
  }
}
