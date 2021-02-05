echo "****************** Updating Next *********************"
git fetch --all && \
git checkout next && \
git merge main && \
exit 0 # the command chain was successful
echo "****************** Updated Next *********************"
exit 1 #if we get here one of the commands above failed