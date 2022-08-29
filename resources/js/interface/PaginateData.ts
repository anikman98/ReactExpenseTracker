interface PaginateData{
    current_page: number,
    data: Array<any>,
    first_page_url: string,
    from: number,
    last_page: number,
    lst_page_url: string,
    links: Array<any>,
    next_page_url: string,
    path: string,
    per_page: number,
    prev_page_url: string,
    to: number,
    total: number
}

export default PaginateData;