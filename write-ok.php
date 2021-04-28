<?
    include_once "db.php";

    $name = $_POST['name'];
    $email= $_POST['email'];
    $message = $_POST['message'];

    $query = "insert into contact (name,email,message) values ('$name','$email','$message')";

    mysqli_query($dbcon,$query);
?>

<script>
    alert("등록 되었습니다.");
    location.href="index.html";
</script>