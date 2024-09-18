<h2><?= "Mise à Jour" ?></h2>
<?= session()->getFlashdata('error') ?>
<?= validation_list_errors() ?>

<form action="<?= base_url("/userUpdate/$id") ?>" method="post">
    <?= csrf_field() ?>
    <label for="Username">Username:</label>
    <input type="input" name="Username" id="Username" value="<?= service('request')->getPost('Username') ?>">
    <br>
    <label for="Password">Password:</label>
    <textarea name="Password" id="Password" cols="45" rows="4"><?= service('request')->getPost('Password') ?></textarea>
    <br>
    <input type="submit" name="submit" value="Mettre à jour">
</form>