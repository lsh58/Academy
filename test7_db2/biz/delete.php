<? 
    include_once $_SERVER['DOCUMENT_ROOT']."/admin/admin_check.php";

    $num = $_GET['num'];
    $query = "delete from biz where num='$num'";

    mq($query);

    page('list.php');
?>
