import { ICamera } from './ICamera';

export interface ICamerasPage {
    content: ICamera[];
    pageable: {
        pageNumber: number;
        pageSize: number;
    };
    totalPages: number;
    totalElements: number;
}

