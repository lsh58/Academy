<? 
    include_once $_SERVER['DOCUMENT_ROOT']."/admin/admin_check.php";

    $name = $_POST['name'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $job = $_POST['job'];
    
    $query = "insert into biz(
            name, email, tel, job
        ) values (
            '$name','$email','$tel','$job'
        )";
    mq($query);
    page('list.php');
?>