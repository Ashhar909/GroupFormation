import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getmentors } from "../../store/actions/mentorAct";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Button } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Mentors = (props) => {

  const handleRequest = () => {
    alert("requested to Join")
  }
  useEffect(() => {
    // eslint-disable-next-line
  }, [])
  

  return (
    <div className="container my-3">
    <h2 className="my-3" style={{borderBottom:"2px solid black"}}>Mentors</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Mentor</StyledTableCell>
            <StyledTableCell align="center">email</StyledTableCell>
            <StyledTableCell align="center">Request to Join</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.mentorData.mentors ? props.mentorData.mentors.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center" onClick={handleRequest}><Button><GroupAddIcon/></Button></StyledTableCell>
            </StyledTableRow>
          )):null}
        </TableBody>
      </Table>
    </TableContainer>
    {/* <div className="row mx-2">
            
      {props.mentorData.mentors ? props.mentorData.mentors.map((mentor) => {
      return (
        <div key={mentor._id} className="col-3 my-3">
         <Mentorcard mentor={mentor}/>
      </div>
      )
    }) : <div>Loading</div>}

    </div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mentorData: state.mentor,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getmentors: (token) => dispatch(getmentors(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mentors);
