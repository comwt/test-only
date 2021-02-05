echo "****************** Updating Next *********************"
git fetch --all
git checkout next
git merge main
echo "****************** Updated Next *********************"