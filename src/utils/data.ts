import { ServiceOptions, HeaderOptions } from './types';


export const SERVICES: ServiceOptions[] = [
    {
        name: 'SEO Optimization',
        description: 'Improve your website’s visibility on search engines to attract more organic traffic.',
        code: 'seo',
        price: 300
    },
    {
        name: 'Advertising Campaigns',
        description: 'Create and manage targeted advertising campaigns to reach your ideal audience.',
        code: 'ads',
        price: 400
    },
    {
        name: 'Website Development',
        description: 'Design and develop a professional website tailored to your business needs.',
        code: 'web',
        price: 500,
        hasCustomOptions: true
    }
];

export const HEADER: HeaderOptions [] =[
{
    title: 'CREA TU PRESUPUESTO AHORA',
    description: 'Selecciona los servicios que te gustaría desarrollar',
    buttonText: 'Volver al Inicio'
}
]; 