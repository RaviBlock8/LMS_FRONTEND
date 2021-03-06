import React from "react";
import stringCap from "../../handlers/stringCap"
import getStringDate from '../../handlers/StringData'
import {
    TableCell,
    TableRow,
    Link
  } from "@material-ui/core/";
import EditIcon from '@material-ui/icons/Edit';
const LeaveTableRow = (props) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {stringCap(props.row.leaveType)}
      </TableCell>
      <TableCell align="right">{getStringDate(props.row.startDate)}</TableCell>
      <TableCell align="right">{getStringDate(props.row.endDate)}</TableCell>
      <TableCell align="right">{props.row.daysCount}</TableCell>
      <TableCell align="right">{stringCap(props.row.status)}</TableCell>
      <TableCell align="right">{props.row.status==="pending"?<Link style={{cursor:"pointer"}}><EditIcon/></Link>:''}</TableCell>
    </TableRow>
  );
};

export default LeaveTableRow;
