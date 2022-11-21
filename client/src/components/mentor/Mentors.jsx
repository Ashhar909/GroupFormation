import React ,{ useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { connect } from 'react-redux';
import { getmentors } from '../../store/actions/mentorAct';

function createData(name, email, division) {
  return { name, email, division};
}


const Mentors = (props) => {
    useEffect(() => {
      console.log(props)
      props.getmentors(props.auth.token)
      .then(()=>{
        console.log("mentors fetched")
      }).catch((err) => {
        console.log(err.message)
      })
      // eslint-disable-next-line
    }, [])

    // const rows = [
    //   createData('Millind Patwardhan', 'Problem Solving', 'S'),
    //   createData('Vrinda Parkhi', 'Power Electronics', 'T'),
    //   createData('Mrunal Shidore', 'Hardware', 'A'),
    // ];
    const rows = [
      props.mentors.mentors.map((mentor)=> {
        return(
        createData(mentor.name, mentor.email, mentor._id)
        )
      })
    ];
    
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
  return (
    <div className='container' style={{marginTop:"50px", marginBottom:"50px", width:"75%"}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Mentor's Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Division</StyledTableCell>
            <StyledTableCell align="center">Add Mentor</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.division}</StyledTableCell>
              <StyledTableCell align="center"><PersonAddIcon/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    mentors:state.mentor,
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getmentors : (token) => dispatch(getmentors(token))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Mentors);