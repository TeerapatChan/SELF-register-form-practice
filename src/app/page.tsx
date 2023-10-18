import { Box } from '@mui/material';
import RegisterForm from '@/components/RegisterForm';
export default function Home() {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <RegisterForm />
        </Box>
    );
}
