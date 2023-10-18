'use client';
import React from 'react';
import { Button, Stack, TextField } from '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import phoneRegex from '@/utils/phoneRegex';

interface FormInput {
    name: string;
    nickname: string;
    email: string;
    tel: string;
}

const schema = yup.object().shape({
    name: yup.string().required(),
    nickname: yup.string().required(),
    email: yup.string().email().required(),
    tel: yup
        .string()
        .required('Phone number is required')
        .matches(phoneRegex, 'Phone number is not valid')
        .min(10, 'too short')
        .max(10, 'too long'),
});

export default function RegisterForm() {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormInput>({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            nickname: '',
            email: '',
            tel: '',
        },
    });

    const formSubmit: SubmitHandler<FormInput> = (data: FormInput) => {
        console.log(data);
    };
    console.log('errors', errors);

    return (
        <form
            style={{
                width: '30%',
                backgroundColor: '#f2f5f3',
                padding: '2rem',
                borderRadius: '0.5rem',
            }}
            onSubmit={handleSubmit(formSubmit)}
        >
            <Stack
                spacing={3}
                sx={{
                    width: '100%',
                }}
            >
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Name"
                            variant="outlined"
                            type="text"
                            error={!!errors.name?.message}
                            helperText={errors.name ? errors.name?.message : ''}
                        />
                    )}
                />
                <Controller
                    name="nickname"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Nickname"
                            variant="outlined"
                            type="text"
                            error={!!errors.nickname?.message}
                            helperText={errors.nickname ? errors.nickname?.message : ''}
                        />
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Email"
                            variant="outlined"
                            type="email"
                            error={!!errors.email?.message}
                            helperText={errors.email ? errors.email?.message : ''}
                        />
                    )}
                />
                <Controller
                    name="tel"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Tel."
                            variant="outlined"
                            type="text"
                            error={!!errors.tel?.message}
                            helperText={errors.tel ? errors.tel?.message : ''}
                        />
                    )}
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        width: '50%',
                        alignSelf: 'center',
                    }}
                >
                    Submit
                </Button>
            </Stack>
        </form>
    );
}
