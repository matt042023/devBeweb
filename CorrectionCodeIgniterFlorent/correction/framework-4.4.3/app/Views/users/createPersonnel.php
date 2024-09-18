<h2><?= "Créer un nouvel Employé" ?></h2>

<?= session()->getFlashdata('error') ?>
<?= validation_list_errors() ?>

<form action="/createPersonnel" method="post">
    <?= csrf_field() ?>

    <label for="Nom">Nom</label>
    <input type="input" name="Nom" value="<?= set_value('Nom') ?>">
    <br>

    <label for="Prenom">Prenom</label>
    <textarea name="Prenom" cols="45" rows="4"><?= set_value('Prenom') ?></textarea>
    <br>

    <input type="submit" name="submit" value="Creer un nouvel Employé">
</form>
