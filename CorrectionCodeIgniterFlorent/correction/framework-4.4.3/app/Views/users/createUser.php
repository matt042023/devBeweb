<h2><?= "Créer un nouvel utilisateur" ?></h2>

<?= session()->getFlashdata('error') ?>
<?= validation_list_errors() ?>

<form action="/createUser" method="post">
    <?= csrf_field() ?>

    <label for="Username">Nom de l'Utilisateur</label>
    <input type="input" name="Username" value="<?= set_value('Username') ?>">
    <br>

    <label for="Password">Mot de passe</label>
    <textarea name="Password" cols="45" rows="4"><?= set_value('Password') ?></textarea>
    <br>

    <input type="submit" name="submit" value="Creer un nouvel Utilisateur">
</form>
