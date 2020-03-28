export const INSERT_NEW_URL = `INSERT INTO url_store
                                (long_url, short_url, time_created)
                                VALUES
                                (?,?,NOW());`;

export const GET_URL = `SELECT u.long_url
                        FROM url_store u
                        WHERE u.short_url = ?`;

export const GET_ALL_URLS = `SELECT *
                            FROM url_store`;
