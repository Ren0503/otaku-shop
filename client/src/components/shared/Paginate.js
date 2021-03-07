import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
    return (
        pages > 1 && (
            <Pagination>
                <LinkContainer to={
                    !isAdmin
                    ? keyword
                        ? `/search/${keyword}/page/1`
                        : `/page/1`
                    : `/admin/product_list/1`
                }>
                    <Pagination.First disabled={page === 1}/>
                </LinkContainer>
                {[...Array(pages).keys()].map((x) => (
                    <LinkContainer
                        key={x + 1}
                        to={
                          !isAdmin
                            ? keyword
                              ? `/search/${keyword}/page/${x + 1}`
                              : `/page/${x + 1}`
                            : `/admin/product_list/${x + 1}`
                        }
                    >
                        <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
                    </LinkContainer>
                ))}
                <LinkContainer to={
                    !isAdmin
                    ? keyword
                        ? `/search/${keyword}/page/${pages}`
                        : `/page/${pages}`
                    : `/admin/product_list/${pages}`
                }>
                    <Pagination.Last disabled={page === pages}/>
                </LinkContainer>
            </Pagination>
        )
    )
}

export default Paginate
