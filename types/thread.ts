export interface Thread {
    id: string;
    author: User;
    content: string;
    image?: string;
    replies?: Reply[];
    repliesCount: number;
    likesCount: number;
    mention?: boolean;
    mentionUser?: User;
    createdAt: string;
}

export interface Reply{
    id: string;
    author: User;
    content: string;
    likes: number;
    createdAt: string;
}

export interface User {
    id: string;
    name: string;
    username: string;
    bio: string;
    photo: string;
    followers?: User[];
    link?: string;
    verified: boolean;
}