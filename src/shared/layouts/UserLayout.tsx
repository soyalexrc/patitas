import {Outlet, useNavigate, useLocation} from 'react-router-dom';
import {
  Box
} from "@mui/material";

export default function UserLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box component="main"
         sx={{ width: '100%', height: '100%', flexGrow: 1, backgroundColor: '#fff'}}>
      <Outlet/>
    </Box>
  )
}
