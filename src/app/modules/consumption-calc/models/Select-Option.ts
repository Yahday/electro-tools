interface SelectOption {
    label: string;
    value: string;
}

export const timeOptions: SelectOption[] = [
    {label: 'Horas', value: 'h'},
    {label: 'Minutos', value: 'm'},
    {label: 'Segundos', value: 's'},
]

export const cycleOptions: SelectOption[] = [
    {label: 'Al día', value: 'd'},
    {label: 'A la semana', value: 'w'},
    {label: 'Al mes', value: 'm'},
]