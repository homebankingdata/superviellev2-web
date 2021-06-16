import React from 'react';
import {useEffect, useState} from 'react';
import axiosClient from '../config/axios.js';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import { Button, Row } from 'react-bootstrap';
import { CSVLink } from 'react-csv';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  
const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const headers = [
      { label: 'Nombre de usuario', key: 'username'},
      { label: 'Contraseña', key: 'password'},
      { label: 'Fecha de creación', key: 'created'}
  ]

const BasicTable = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [credentials, setCredentials] = useState([]);
    const csvReport = {
        filename: 'logs.csv',
        headers: headers,
        data: credentials
    }
    
    const getCredentials = async () =>{
        try{
            const response = await axiosClient.get("/credentials/supervielle");
            console.log(response);
            setCredentials(response.data);
        }
        catch(e){
            console.log(e);
        }
    }

    const exportCredentials = () =>{
    }
    
    const deleteCredentials = async () =>{
        try{
            const response = await axiosClient.delete("/credentials");
            console.log(response);
        }
        catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        getCredentials()
    }, [])

    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return(
        <div>
            <h1>Registro de credenciales</h1>
            <Paper>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>Nombre de usuario</StyledTableCell>
                            <StyledTableCell>Contraseña</StyledTableCell>
                            <StyledTableCell>Fecha de creación</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {credentials.map((item) => {
                                return(
                                    <StyledTableRow>
                                        <StyledTableCell component="th" scope="row">
                                            {item.username}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {item.password}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            {item.created}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10]}
                    component="div"
                    count={credentials.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
                <TableSortLabel/>
            </Paper>
            <Row
                style={{
                    justifyContent:"space-between"
                }}>
                <CSVLink {...csvReport}>
                    <Button
                        style={{
                            backgroundColor:"#3d71c4",
                            borderRadius:"6px", 
                            fontFamily:"https://fonts.googleapis.com/css2?family=Heebo:wght@100&display=swap", 
                            fontWeight:"500", 
                            marginTop:"30px",
                            height:"56px"
                        }}>
                        Exportar datos
                    </Button>
                </CSVLink>
                <Button
                    onClick={deleteCredentials}
                    style={{
                        backgroundColor:"#d52b1e",
                        borderRadius:"6px", 
                        fontFamily:"https://fonts.googleapis.com/css2?family=Heebo:wght@100&display=swap", 
                        fontWeight:"500", 
                        marginTop:"30px",
                        height:"56px"
                    }}>
                    Vaciar registros
                </Button>
            </Row>
        </div>
    )
}

export default BasicTable;