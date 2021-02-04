import Header from "components/Headers/Header";
import React, { Component } from "react";
import { Button, Card, CardHeader, Container,Badge, Row } from "reactstrap";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

export class Survey extends Component {
  state = {
    headCells: [
      { id: "title", label: "Title" },
      { id: "status", label: "Status" },
      { id: "type", label: "Type" },
      { id: "actions", label: "Actions" },
    ],
    orderBy: "title",
    order: "asc",
    page: 1,
    rowsPerPage: 5, 
    rows: [
      this.createData("Cupcake", <Badge color="warning">NotStarted</Badge>, 3.7, 67, 4.3),
      this.createData("Donut", <Badge color="success">Completed</Badge>, 25.0, 51, 4.9),
      this.createData("Eclair", <Badge color="primary">Ongoing</Badge>, 16.0, 24, 6.0),
      this.createData("Frozen yoghurt", <Badge color="warning">NotStarted</Badge>, 6.0, 24, 4.0),
      this.createData("Gingerbread", <Badge color="success">Completed</Badge>, 16.0, 49, 3.9),
      this.createData("Honeycomb", <Badge color="primary">Ongoing</Badge>, 3.2, 87, 6.5),
      this.createData("Ice cream sandwich", <Badge color="warning">NotStarted</Badge>, 9.0, 37, 4.3),
      this.createData("Jelly Bean", <Badge color="warning">NotStarted</Badge>, 0.0, 94, 0.0),
      this.createData("KitKat", <Badge color="success">Completed</Badge>, 26.0, 65, 7.0),
      this.createData("Lollipop", <Badge color="primary">Ongoing</Badge>, 0.2, 98, 0.0),
      this.createData("Marshmallow",  <Badge color="warning">NotStarted</Badge>, 0, 81, 2.0),
      this.createData("Nougat", <Badge color="success">Completed</Badge>, 19.0, 9, 37.0),
      this.createData("Oreo", <Badge color="primary">Ongoing</Badge>, 18.0, 63, 4.0),
    ],
  };
  createData(title, status, type, status1, type1) {
    return { title, status, type };
  }
  createSortHandler = (property) => (event) => {
    this.handleRequestSort(property);
  };
  handleRequestSort = (property) => {
    const isAsc = this.state.orderBy === property && this.state.order === "asc";
    this.setState({
      order: isAsc ? "desc" : "asc",
      orderBy: property,
    });
  };
  descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => this.descendingComparator(a, b, orderBy)
      : (a, b) => -this.descendingComparator(a, b, orderBy);
  }
  stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  render() {
    let { orderBy, order } = this.state;
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Survey</h3>
                </CardHeader>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        {this.state.headCells.map((headCell) => (
                          <TableCell>
                            <TableSortLabel
                              active={orderBy === headCell.id}
                              direction={
                                orderBy === headCell.id ? order : "asc"
                              }
                              onClick={this.createSortHandler(headCell.id)}
                            >
                              {headCell.label}
                            </TableSortLabel>
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.stableSort(
                        this.state.rows,
                        this.getComparator(this.state.order, this.state.orderBy)
                      )
                        .slice(
                          this.state.page * this.state.rowsPerPage,
                          this.state.page * this.state.rowsPerPage +
                            this.state.rowsPerPage
                        )
                        .map((row, index) => {
                          console.log(row);
                          return (
                            <TableRow key={index} hover>
                              <TableCell>{row.title}</TableCell>
                              <TableCell>{row.status}</TableCell>
                              <TableCell>{row.type}</TableCell>
                              <TableCell>
                                <Link
                                  className="btn btn-dark btn-sm"
                                  to="/admin/survey/detail"
                                >
                                  <i className="fa fa-eye"></i>
                                </Link>
                              </TableCell>
                              {/* <TableCell>{row.calories}</TableCell> */}
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={this.state.rows.length}
                  rowsPerPage={this.state.rowsPerPage}
                  page={this.state.page}
                  onChangePage={(e, nP) => this.setState({ page: nP })}
                  onChangeRowsPerPage={(e) =>
                    this.setState({
                      rowsPerPage: parseInt(e.target.value, 10),
                      page: 0,
                    })
                  }
                />
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Survey;
