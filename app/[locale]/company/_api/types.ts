 
export interface User {
    id: number;
    avatar: string;
    name: string | null;
    user_name: string;
    created_time: string;
    role: string;
    theme: string;
    is_active: boolean | undefined;
    active: number | undefined;
    inactive: number | undefined;
    total: number | undefined;
    
}

interface Paginator {
    total_count: number;
    total_pages: number;
    current_page: number;
    per_page: number;
}

export interface IndividualResponse {
    status: boolean;
    data: {
        list: User[];
        paginator: Paginator;
    };
    message: string | null;
    code: number;
}