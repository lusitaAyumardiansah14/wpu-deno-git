interface ISql {
    [index : string]: string;
    
}
const TSql = {} as ISql;
TSql['ktgFindAll'] = "select * from tbl_kategori;";
TSql['ktgFindByKode'] = "select * from tbl_kategori where kode = $1;";
TSql['ktgFindInKode'] = "select * from tbl_kategori where kode ini ($1, $2,$3);";
TSql['BlogInfoFindAll'] = "select * from tbl_bloginfo;";
export default TSql;
