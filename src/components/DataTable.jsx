import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(color, msb, lsb, multiplier, tolerance) {
  return { color, msb, lsb, multiplier, tolerance };
}

const background = [
  "black",
  "#904a0bff",
  "#dc1c4b",
  "#ec4733ff",
  "#ffd883ff",
  "#43b76eff",
  "#0094bcff",
  "#7351c5ff",
  "#808080ff",
  "#e6e6e6ff",
  "gold",
  "silver",
  "none",
];

const rows = [
  createData("Black", 0, 0, "", ""),
  createData("Brown", 1, 1, "0", ""),
  createData("Red", 2, 2, "00", ""),
  createData("Orange", 3, 3, "000", ""),
  createData("Yellow", 4, 4, "0000", ""),
  createData("Green", 5, 5, "00000", ""),
  createData("Blue", 6, 6, "000000", ""),
  createData("Violet", 7, 7, "0000000", ""),
  createData("Gray", 8, 8, "00000000", ""),
  createData("White", 9, 9, "000000000", ""),
  createData("Gold", "", "", "", "5%"),
  createData("Silver", "", "", "", "10%"),
  createData("None", "", "", "", "20%"),
];

const setbackground = (index) => {
  if (index === 12) return "#ebeef1";
  else return background[index];
};

const setColor = (index) => {
  if (index === 0) return "white";
  else return "black";
};

export default function DataTable() {
  return (
    <TableContainer
      sx={{
        bgcolor: "transparent",
      }}
      component={Paper}
    >
      <Table
        align="center"
        sx={{ minWidth: 650, width: 100 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                color: "white",
              }}
            >
              Resistor Band Color
            </TableCell>
            <TableCell
              sx={{
                color: "white",
              }}
              align="center"
            >
              First Band (MSB)
            </TableCell>
            <TableCell
              sx={{
                color: "white",
              }}
              align="center"
            >
              Second Band (LSB)
            </TableCell>
            <TableCell
              sx={{
                color: "white",
              }}
              align="center"
            >
              Third Band (Multiplier)
            </TableCell>
            <TableCell
              sx={{
                color: "white",
              }}
              align="center"
            >
              Fourth Band (Tolerance)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.color}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                bgcolor: setbackground(index),
              }}
            >
              <TableCell
                sx={{
                  color: setColor(index),
                }}
                component="th"
                scope="row"
              >
                {row.color}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: setColor(index),
                }}
              >
                {row.msb}
              </TableCell>
              <TableCell
                sx={{
                  color: setColor(index),
                }}
                align="center"
              >
                {row.lsb}
              </TableCell>
              <TableCell
                sx={{
                  color: setColor(index),
                }}
                align="center"
              >
                {row.multiplier}
              </TableCell>
              <TableCell
                sx={{
                  color: setColor(index),
                }}
                align="center"
              >
                {row.tolerance}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
